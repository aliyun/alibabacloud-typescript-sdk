// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldContentValue } from "./FieldContentValue";


export class GetRealtimeDeliveryFieldResponseBody extends $dara.Model {
  fieldContent?: { [key: string]: FieldContentValue };
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

