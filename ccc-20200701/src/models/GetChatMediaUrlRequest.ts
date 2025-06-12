// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatMediaUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * media id
   * 
   * This parameter is required.
   * 
   * @example
   * $iAHNCNQCo3dhdgMGBAAFAAbaACOEAaQhIEeoAqpjjBl42N6o_kg7A88AAAGRIRRuBgTOACrxHgcACM8AAAGRIYJLBQ
   */
  mediaId?: string;
  /**
   * @example
   * 8707EB29-BAED-4302-B999-40BA61877437
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mediaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

