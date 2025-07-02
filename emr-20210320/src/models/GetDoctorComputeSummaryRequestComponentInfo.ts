// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDoctorComputeSummaryRequestComponentInfo extends $dara.Model {
  /**
   * @remarks
   * Set the filter condition name based on the value of ComponentType. For example, if you set ComponentType to queue, you can specify a specific queue name to obtain the resource usage of a specific queue.
   * 
   * @example
   * MAPREDUCE
   */
  componentName?: string;
  /**
   * @remarks
   * The resource type for filtering. Valid values:
   * 
   * *   engine: filters results by engine.
   * *   queue: filters results by queue.
   * *   cluster: displays the results at the cluster level.
   * 
   * If you do not specify this parameter, the information at the cluster level is displayed by default.
   * 
   * @example
   * engine
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
      componentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

