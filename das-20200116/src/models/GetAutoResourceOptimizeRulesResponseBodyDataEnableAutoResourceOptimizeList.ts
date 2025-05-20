// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic fragment recycling feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoDefragment?: boolean;
  /**
   * @remarks
   * Indicates whether DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  dasProOn?: boolean;
  /**
   * @remarks
   * The database instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The fragmentation rate of a single physical table for which the automatic fragment recycling feature is enabled.
   * 
   * @example
   * 0.2
   */
  tableFragmentationRatio?: number;
  /**
   * @remarks
   * The minimum storage usage of a single physical table for which the automatic fragment recycling feature is enabled. Unit: GB.
   * 
   * @example
   * 10
   */
  tableSpaceSize?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to create the database instance.
   * 
   * @example
   * 140692647406****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      autoDefragment: 'AutoDefragment',
      dasProOn: 'DasProOn',
      instanceId: 'InstanceId',
      tableFragmentationRatio: 'TableFragmentationRatio',
      tableSpaceSize: 'TableSpaceSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDefragment: 'boolean',
      dasProOn: 'boolean',
      instanceId: 'string',
      tableFragmentationRatio: 'number',
      tableSpaceSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

