// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaEntityDefResponseBody extends $dara.Model {
  /**
   * @example
   * custom_entity-biz_api
   */
  entityType?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0A04C673-BEFA-5803-94E5-89E2D9F8C567
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

