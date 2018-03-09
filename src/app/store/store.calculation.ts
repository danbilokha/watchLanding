const skip = (count: number) => (data: Array<any>): any => count ? data.slice(count) : data;
const take = (count: number) => (data: Array<any>): any => count ? data.slice(0, count) : data;

export {skip, take};