// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCipStatsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  byMonth?: boolean;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
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
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  /**
   * @example
   * 253552244990701265
   */
  subUid?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      byMonth: 'ByMonth',
      endDate: 'EndDate',
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

