// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentInvestigationResponseBodyIncidentInvestigation extends $dara.Model {
  /**
   * @remarks
   * The name of the alert that triggered this AI investigation.
   * 
   * @example
   * Webshell alert
   */
  incidentInvestigationAlertName?: string;
  /**
   * @remarks
   * The judgment conclusion of the AI investigation, which corresponds to ai_judgement_conclusion in the report.
   * 
   * @example
   * Existing evidence is insufficient to confirm whether the attack chain is complete. Supplement associated logs for further analysis
   */
  incidentInvestigationConclusion?: string;
  /**
   * @remarks
   * The display ID of the AI investigation report. You can use it as the IncidentInvestigationDisplayId request parameter of this operation to query the report.
   * 
   * @example
   * 755616bb5d63046c1e4f62ea872a****
   */
  incidentInvestigationDisplayId?: string;
  /**
   * @remarks
   * The end time of the AI investigation. The value is a UNIX timestamp in seconds. If the execution end time is not recorded, the last update time of the investigation record is used. If neither is available, this parameter is empty.
   * 
   * @example
   * 1786195753
   */
  incidentInvestigationEndTime?: number;
  /**
   * @remarks
   * The unique ID of the AI investigation report. You can use it as the IncidentInvestigationId request parameter of this operation to query the report.
   * 
   * @example
   * 951a6a0b-14c7-4332-ace6-bff21c******
   */
  incidentInvestigationId?: string;
  /**
   * @remarks
   * The output content of the AI investigation, which is a JSON-formatted string. It may contain fields such as investigation_report (the investigation process and evidence body, which can be in Markdown format). This parameter is empty if no corresponding output is generated. Internal fields may change with report versions.
   * 
   * @example
   * {"investigation_report":"### Investigation results\\nA suspicious file was detected, but execution evidence is missing."}
   */
  incidentInvestigationOutput?: string;
  /**
   * @remarks
   * The content of the AI investigation report, which is a JSON-formatted string. It may contain fields such as judgement_category (judgment category), ai_judgement_conclusion (judgment conclusion), ai_summary (summary), attack process, and attack graph. The specific content may change with report versions.
   * 
   * @example
   * {"judgement_category":"insufficient_information_to_evaluate","ai_judgement_conclusion":"Existing evidence is insufficient to confirm whether the attack chain is complete. Supplement associated logs for further analysis.","ai_summary":"A suspicious file was detected. Existing evidence is insufficient to confirm whether the attack was successful."}
   */
  incidentInvestigationReport?: string;
  /**
   * @remarks
   * The start time of the AI investigation. The value is a UNIX timestamp in seconds. If the execution start time is not recorded, the creation time of the investigation record is used. If neither is available, this parameter is empty.
   * 
   * @example
   * 1786195533
   */
  incidentInvestigationStartTime?: number;
  /**
   * @remarks
   * The judgment category of the AI investigation report, which corresponds to judgement_category in the report. It does not indicate the execution status of the asynchronous task. Valid values:
   * - real_attack: Real attack.
   * - blocked: Risk blocked.
   * - false_positive: Suspected false positive.
   * - insufficient_information_to_evaluate: Insufficient information to evaluate.
   * 
   * @example
   * insufficient_information_to_evaluate
   */
  incidentInvestigationStatus?: string;
  /**
   * @remarks
   * The summary of the AI investigation report, which corresponds to ai_summary in the investigation results.
   * 
   * @example
   * A suspicious file was detected. Existing evidence is insufficient to confirm whether the attack was successful
   */
  incidentInvestigationSummary?: string;
  /**
   * @remarks
   * The globally unique UUID of the event.
   * 
   * @example
   * 9f00c254391400f6898c4d4fea******
   */
  incidentUuid?: string;
  static names(): { [key: string]: string } {
    return {
      incidentInvestigationAlertName: 'IncidentInvestigationAlertName',
      incidentInvestigationConclusion: 'IncidentInvestigationConclusion',
      incidentInvestigationDisplayId: 'IncidentInvestigationDisplayId',
      incidentInvestigationEndTime: 'IncidentInvestigationEndTime',
      incidentInvestigationId: 'IncidentInvestigationId',
      incidentInvestigationOutput: 'IncidentInvestigationOutput',
      incidentInvestigationReport: 'IncidentInvestigationReport',
      incidentInvestigationStartTime: 'IncidentInvestigationStartTime',
      incidentInvestigationStatus: 'IncidentInvestigationStatus',
      incidentInvestigationSummary: 'IncidentInvestigationSummary',
      incidentUuid: 'IncidentUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentInvestigationAlertName: 'string',
      incidentInvestigationConclusion: 'string',
      incidentInvestigationDisplayId: 'string',
      incidentInvestigationEndTime: 'number',
      incidentInvestigationId: 'string',
      incidentInvestigationOutput: 'string',
      incidentInvestigationReport: 'string',
      incidentInvestigationStartTime: 'number',
      incidentInvestigationStatus: 'string',
      incidentInvestigationSummary: 'string',
      incidentUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIncidentInvestigationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AI investigation details of the event. This parameter is empty if no matching investigation record is found.
   */
  incidentInvestigation?: GetIncidentInvestigationResponseBodyIncidentInvestigation;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot this call.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      incidentInvestigation: 'IncidentInvestigation',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentInvestigation: GetIncidentInvestigationResponseBodyIncidentInvestigation,
      requestId: 'string',
    };
  }

  validate() {
    if(this.incidentInvestigation && typeof (this.incidentInvestigation as any).validate === 'function') {
      (this.incidentInvestigation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

