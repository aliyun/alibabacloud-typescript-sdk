// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateToOtherZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The zone migration configuration, including the source zone, destination zone, and destination vSwitch.
   * 
   * @example
   * {"fromZoneId":"cn-hangzhou-e","toZoneId":"cn-hangzhou-f","toVswitchId":"vsw-bp16t5hpc689dgkgc****"}
   */
  body?: string;
  /**
   * @remarks
   * Specifies whether to precheck the node migration across zones. A value of true indicates that only a precheck is performed and the migration task is not executed. A value of false indicates that the migration task is executed after the precheck succeeds.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

