// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResourceStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of online resources.
   * 
   * @example
   * 10
   */
  resourceCount?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   HttpApi
   * *   GatewayRoute
   * 
   * @example
   * HttpApi
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'resourceCount',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
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

