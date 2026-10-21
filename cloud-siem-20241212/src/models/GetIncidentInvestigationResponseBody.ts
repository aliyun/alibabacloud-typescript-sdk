// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentInvestigationResponseBodyIncidentInvestigation extends $dara.Model {
  /**
   * @remarks
   * The name of the alert that triggered this AI investigation.
   * 
   * @example
   * Webshell Alert
   */
  incidentInvestigationAlertName?: string;
  /**
   * @remarks
   * The judgment conclusion of the AI investigation, corresponding to ai_judgement_conclusion in the report.
   * 
   * @example
   * Insufficient evidence to confirm whether the attack chain is complete. Supplement correlated logs for further analysis
   */
  incidentInvestigationConclusion?: string;
  /**
   * @remarks
   * The display ID of the AI investigation report. You can use this value as the IncidentInvestigationDisplayId parameter of this operation to query the report.
   * 
   * @example
   * 755616bb5d63046c1e4f62ea872a****
   */
  incidentInvestigationDisplayId?: string;
  /**
   * @remarks
   * The end time of the AI investigation, in seconds (UNIX timestamp). If the execution end time is not recorded, the last update time of the investigation record is used. This field is empty if neither time exists.
   * 
   * @example
   * 1786195753
   */
  incidentInvestigationEndTime?: number;
  /**
   * @remarks
   * The unique ID of the AI investigation report. You can use this value as the IncidentInvestigationId parameter of this operation to query the report.
   * 
   * @example
   * 951a6a0b-14c7-4332-ace6-bff21c******
   */
  incidentInvestigationId?: string;
  /**
   * @remarks
   * The output content of the AI investigation, in JSON-formatted string. This field can contain fields such as investigation_report (the investigation process and evidence body, which may use Markdown format). This field is empty if the corresponding output is not generated. Internal fields may change across report versions.
   * 
   * @example
   * {"investigation_report":"### Investigation Results\\nSuspicious file detected, but execution evidence is missing."}
   */
  incidentInvestigationOutput?: string;
  /**
   * @remarks
   * The AI investigation report content, in JSON-formatted string. This field can contain fields such as judgement_category (judgment category), ai_judgement_conclusion (judgment conclusion), ai_summary (summary), attack process, and attack graph. The specific content may change across report versions.
   * 
   * @example
   * {"judgement_category":"insufficient_information_to_evaluate","ai_judgement_conclusion":"Insufficient evidence to confirm whether the attack chain is complete. Supplement correlated logs for further analysis.","ai_summary":"Suspicious file detected. Insufficient evidence to confirm whether the attack was successful."}
   */
  incidentInvestigationReport?: string;
  /**
   * @remarks
   * The start time of the AI investigation, in seconds (UNIX timestamp). If the execution start time is not recorded, the creation time of the investigation record is used. This field is empty if neither time exists.
   * 
   * @example
   * 1786195533
   */
  incidentInvestigationStartTime?: number;
  /**
   * @remarks
   * The judgment category of the AI investigation report, corresponding to judgement_category in the report. This field does not indicate the execution status of the asynchronous task. Valid values:
   * - real_attack: Real attack.
   * - blocked: Risk blocked.
   * - false_positive: Suspected false positive.
   * - insufficient_information_to_evaluate: Unable to determine.
   * 
   * @example
   * insufficient_information_to_evaluate
   */
  incidentInvestigationStatus?: string;
  /**
   * @remarks
   * The summary of the AI investigation report, corresponding to ai_summary in the investigation results.
   * 
   * @example
   * Suspicious file detected. Insufficient evidence to confirm whether the attack was successful
   */
  incidentInvestigationSummary?: string;
  /**
   * @remarks
   * The globally unique UUID of the incident.
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
   * The AI investigation details of the incident. This field is empty if no matching investigation record is found.
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

