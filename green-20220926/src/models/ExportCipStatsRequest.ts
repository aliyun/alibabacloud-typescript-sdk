// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCipStatsRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to support monthly indexing. Values: -**true**: Supported. -**false**: Not supported.
   * 
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @remarks
   * The end time of the query, in the format yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-04-16 09:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * Export type. Values: -**level**: Export by risk level. -**label**: Export by label.
   * 
   * @example
   * label
   */
  exportType?: string;
  /**
   * @remarks
   * The label of the task to be exported.
   * 
   * @example
   * xx
   */
  label?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The start time of the query, in the format yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-04-15 09:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * Sub-account UID.
   * 
   * @example
   * 268220485413130979
   */
  subUid?: string;
  /**
   * @remarks
   * Type, values: -**cip**: Content Security Invocation Count Statistics. -**risk_level**: Content Security Risk Level Statistics. -**content_moderation**: AI Safety Guardrail Content Compliance Risk Level and Label Statistics. -**sensitive_data**: AI Safety Guardrail Sensitive Data Risk Level and Label Statistics. -**prompt_attack**: AI Safety Guardrail Prompt Word Risk Level and Label Statistics.
   * 
   * @example
   * risk_level
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
      exportType: 'ExportType',
      label: 'Label',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
      subUid: 'SubUid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byMonth: 'boolean',
      endDate: 'string',
      exportType: 'string',
      label: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      startDate: 'string',
      subUid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

