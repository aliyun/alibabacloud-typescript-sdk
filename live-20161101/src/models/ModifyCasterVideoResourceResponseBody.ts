// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCasterVideoResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. This parameter is used in the requests of the following operations: DescribeCasterVideoResources, AddCasterLayout, and DescribeCasterLayouts.
   * 
   * @example
   * LIVEPRODUCER_POST-cn-0pp1czt****
   */
  casterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF60DB6A-7FD6-426E-9288-122CC1A52FA7
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * 98461064-1c94-4dc1-85ce-94098764****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

