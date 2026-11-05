import * as $dara from '@darabonba/typescript';
export declare class AttachRCInstancesResponseBodyResponses extends $dara.Model {
    /**
     * @remarks
     * The returned status code.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The instance ID of the RDS Custom instance.
     *
     * @example
     * rc-e2g521l55k038cr8****
     */
    instanceId?: string;
    /**
     * @remarks
     * The returned message of the request.
     *
     * > If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
     *
     * @example
     * Successful
     */
    message?: string;
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
export declare class AttachRCInstancesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 847BA085-B377-4BFA-8267-F82345ECE1D2
     */
    requestId?: string;
    /**
     * @remarks
     * The response results.
     */
    responses?: AttachRCInstancesResponseBodyResponses[];
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 178968983
     */
    taskId?: string;
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
