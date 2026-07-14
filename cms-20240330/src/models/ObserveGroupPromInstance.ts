// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveGroupPromInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the Managed Service for Prometheus instance, such as rw-xxxxxxxxxx.
   */
  id?: string;
  /**
   * @remarks
   * The source of the instance. Valid values:
   * - system: The system automatically identifies the instance based on the workspace or UModel.
   * - custom: The user manually selects the instance in the console.
   */
  kind?: string;
  /**
   * @remarks
   * The region where the Managed Service for Prometheus instance resides. If this parameter is left empty, the backend automatically populates the region based on the workspace to which the application group belongs.
   */
  region?: string;
  /**
   * @remarks
   * The time when the record was written or selected. Format: yyyy-MM-dd HH:mm:ss.
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

