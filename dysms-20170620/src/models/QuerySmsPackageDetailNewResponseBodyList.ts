// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsPackageDetailNewResponseBodyListSmsPackageDetailDTO } from "./QuerySmsPackageDetailNewResponseBodyListSmsPackageDetailDto";


export class QuerySmsPackageDetailNewResponseBodyList extends $dara.Model {
  smsPackageDetailDTO?: QuerySmsPackageDetailNewResponseBodyListSmsPackageDetailDTO[];
  static names(): { [key: string]: string } {
    return {
      smsPackageDetailDTO: 'SmsPackageDetailDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsPackageDetailDTO: { 'type': 'array', 'itemType': QuerySmsPackageDetailNewResponseBodyListSmsPackageDetailDTO },
    };
  }

  validate() {
    if(Array.isArray(this.smsPackageDetailDTO)) {
      $dara.Model.validateArray(this.smsPackageDetailDTO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

