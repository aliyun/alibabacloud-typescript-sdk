import * as $dara from '@darabonba/typescript';
import { EnablePolarClawPluginResponseBody } from "./EnablePolarClawPluginResponseBody";
export declare class EnablePolarClawPluginResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: EnablePolarClawPluginResponseBody;
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
