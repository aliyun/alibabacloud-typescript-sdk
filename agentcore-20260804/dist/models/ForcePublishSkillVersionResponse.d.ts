import * as $dara from '@darabonba/typescript';
import { ForcePublishSkillVersionResponseBody } from "./ForcePublishSkillVersionResponseBody";
export declare class ForcePublishSkillVersionResponse extends $dara.Model {
    headers?: {
        [key: string]: string;
    };
    statusCode?: number;
    body?: ForcePublishSkillVersionResponseBody;
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
