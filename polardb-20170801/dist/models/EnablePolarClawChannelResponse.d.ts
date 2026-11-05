import * as $dara from '@darabonba/typescript';
import { EnablePolarClawChannelResponseBody } from "./EnablePolarClawChannelResponseBody";
export declare class EnablePolarClawChannelResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnablePolarClawChannelResponseBody;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
