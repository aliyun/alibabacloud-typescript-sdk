// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldContentValue } from "./FieldContentValue";


export class GetRealtimeDeliveryFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fields returned.
   */
  fieldContent?: { [key: string]: FieldContentValue };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fieldContent: 'FieldContent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldContent: { 'type': 'map', 'keyType': 'string', 'valueType': FieldContentValue },
      requestId: 'string',
    };
  }

  validate() {
    if(this.fieldContent) {
      $dara.Model.validateMap(this.fieldContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

