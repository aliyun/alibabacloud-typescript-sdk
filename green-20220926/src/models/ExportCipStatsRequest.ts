// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCipStatsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether monthly indexing is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @remarks
   * The end time of the query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-04-16 09:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The export type. Valid values:
   * - **level**: Export by risk level.
   * - **label**: Export by label.
   * 
   * @example
   * label
   */
  exportType?: string;
  /**
   * @remarks
   * The task label to export.
   * 
   * @example
   * xx
   */
  label?: string;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * {"Classify":"guard-scene"}
   */
  query?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The start time of the query. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-04-15 09:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The UID of the RAM user.
   * 
   * @example
   * 268220485413130979
   */
  subUid?: string;
  /**
   * @remarks
   * The type. Valid values:
   * - **cip**: Content Moderation invoke volume statistics.
   * - **risk_level**: Content Moderation security risk level statistics.
   * - **content_moderation**: AI Safety Guardrail content compliance risk level and tag statistics.
   * - **sensitive_data**: AI Safety Guardrail sensitive data risk level and tag statistics.
   * - **prompt_attack**: AI Safety Guardrail prompt risk level and tag statistics.
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
      query: 'Query',
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
      query: 'string',
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

