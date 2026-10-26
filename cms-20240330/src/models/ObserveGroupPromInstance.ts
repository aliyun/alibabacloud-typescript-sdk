// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupPromInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the Prometheus instance, such as rw-xxxxxxxxxx.
   * 
   * @example
   * prom-12345
   */
  id?: string;
  /**
   * @remarks
   * The source of the instance. Valid values:
   * - system: The system automatically identifies the instance based on the workspace or UModel.
   * - custom: The user manually selects the instance in the console.
   * 
   * @example
   * Prometheus
   */
  kind?: string;
  /**
   * @remarks
   * The region where the Prometheus instance resides. If left empty, the backend automatically populates it with the region of the workspace to which the observation group belongs.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The time when the record is written or selected, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-01-15 10:30:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      kind: 'kind',
      region: 'region',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      kind: 'string',
      region: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

