import * as $dara from '@darabonba/typescript';
export declare class CreateLogoTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The logo generation version number. Different versions use different parameter parsing methods.
     *
     * @example
     * v1
     */
    logoVersion?: string;
    /**
     * @remarks
     * The negative prompt.
     *
     * @example
     * Do not generate politically related image content
     */
    negativePrompt?: string;
    /**
     * @remarks
     * The task parameters.
     *
     * @example
     * {\\"ehpcutilParam\\":\\"sched job_submit --commandline \\\\\\"/ehpcdata/data/usersTest/huangqiaoyi-1725933699384/huangqiaoyi-1725933699384.slurm\\\\\\" --runasuser TestGfjnSimworks\\"}
     */
    parameters?: string;
    /**
     * @remarks
     * The positive prompt.
     *
     * @example
     * Strictly extract the summary of the article based on the original text. Do not fabricate or modify the news data in the text, change the original meaning or news facts, or add your own opinions to the summary. Ensure that the generated summary is free of grammatical and punctuation errors. Remove information such as the reporter, correspondent, and source when generating the summary
     */
    prompt?: string;
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
