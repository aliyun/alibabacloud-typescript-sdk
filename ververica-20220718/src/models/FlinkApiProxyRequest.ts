// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlinkApiProxyRequest extends $dara.Model {
  /**
   * @remarks
   * The path of the Flink UI.
   * 
   * This parameter is required.
   * 
   * @example
   * /jobs/4df35f8e54554b23bf7dcd38a151****
   */
  flinkApiPath?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a27a3aa-c5b9-4dc1-8c86-be57d2d6****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   jobs
   * *   sessionclusters
   * 
   * This parameter is required.
   * 
   * @example
   * jobs
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      flinkApiPath: 'flinkApiPath',
      namespace: 'namespace',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flinkApiPath: 'string',
      namespace: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

