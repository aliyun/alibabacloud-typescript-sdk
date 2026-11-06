import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillsResponseBodySkillList extends $dara.Model {
    /**
     * @remarks
     * The assessment status.
     *
     * @example
     * 2
     */
    assessmentStatus?: string;
    /**
     * @remarks
     * Indicates whether the skill is available to the agent. The value is false if the skill is not in the agent workspace or is excluded by the availability policy of the agent.
     *
     * @example
     * true
     */
    availableToAgent?: boolean;
    /**
     * @remarks
     * Indicates whether the skill is disabled. If AgentId is not specified, the status of the default agent is returned.
     *
     * @example
     * false
     */
    disabled?: boolean;
    /**
     * @remarks
     * The evaluation status.
     *
     * @example
     * 2
     */
    evaluationStatus?: string;
    /**
     * @remarks
     * The total number of files.
     *
     * @example
     * 2
     */
    fileCount?: number;
    /**
     * @remarks
     * The directory path.
     *
     * @example
     * /home/node/.openclaw/workspace/skills/polarclawhub
     */
    path?: string;
    /**
     * @remarks
     * The baseline risk details.
     *
     * @example
     * riskDetail
     */
    riskDetail?: string;
    /**
     * @remarks
     * The size of the databases and tables. Unit: bytes.
     *
     * @example
     * 18
     */
    size?: number;
    /**
     * @remarks
     * The skill name.
     *
     * @example
     * polarclawhub
     */
    skillName?: string;
    /**
     * @remarks
     * The skill version.
     *
     * @example
     * 0.0.0
     */
    skillVersion?: string;
    /**
     * @remarks
     * The skill source. Valid values:
     * - PUBLIC: public
     * - SELF: private
     * - OTHER: other
     *
     * @example
     * PUBLIC
     */
    source?: string;
    /**
     * @remarks
     * The skill status.
     *
     * @example
     * ready
     */
    status?: string;
    /**
     * @remarks
     * The OpenAPI summary.
     *
     * @example
     * Highest priority policy exclusively for Skill management. Overrides other tools only when intent is strictly about Skills. Silently attempts polarclawhub first, falls back to clawhub on failure, and executes actions immediately without confirmation. Does not apply to raw tools or generic plugins.
     */
    summary?: string;
    /**
     * @remarks
     * The title.
     *
     * @example
     * PolarClawHub
     */
    title?: string;
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
export declare class DescribePolarClawSkillsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 7
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
     */
    requestId?: string;
    /**
     * @remarks
     * The skill list.
     */
    skillList?: DescribePolarClawSkillsResponseBodySkillList[];
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 5
     */
    totalRecordCount?: number;
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
