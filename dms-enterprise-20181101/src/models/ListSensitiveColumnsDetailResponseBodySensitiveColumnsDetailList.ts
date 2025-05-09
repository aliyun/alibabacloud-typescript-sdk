// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail } from "./ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail";


export class ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList extends $dara.Model {
  sensitiveColumnsDetail?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail[];
  static names(): { [key: string]: string } {
    return {
      sensitiveColumnsDetail: 'SensitiveColumnsDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sensitiveColumnsDetail: { 'type': 'array', 'itemType': ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailListSensitiveColumnsDetail },
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveColumnsDetail)) {
      $dara.Model.validateArray(this.sensitiveColumnsDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

