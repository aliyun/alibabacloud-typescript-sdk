// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntity } from "./MetaEntity";


export class GetMetaEntityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom entity object.
   */
  metaEntity?: MetaEntity;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A04C673-BEFA-5803-94E5-89E2D9F8C567
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metaEntity: 'MetaEntity',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaEntity: MetaEntity,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.metaEntity && typeof (this.metaEntity as any).validate === 'function') {
      (this.metaEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

