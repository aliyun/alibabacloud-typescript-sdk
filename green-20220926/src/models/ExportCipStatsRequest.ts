// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportCipStatsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-04-16 09:00:00
   */
  endDate?: string;
  exportType?: string;
  /**
   * @example
   * xx
   */
  label?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  serviceCode?: string;
  /**
   * @example
   * 2024-04-15 09:00:00
   */
  startDate?: string;
  /**
   * @example
   * 268220485413130979
   */
  subUid?: string;
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

