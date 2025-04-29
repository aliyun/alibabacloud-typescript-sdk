// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi } from "./DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi";


export class DescribeAuthorizedApisResponseBodyAuthorizedApis extends $dara.Model {
  authorizedApi?: DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi[];
  static names(): { [key: string]: string } {
    return {
      authorizedApi: 'AuthorizedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedApi: { 'type': 'array', 'itemType': DescribeAuthorizedApisResponseBodyAuthorizedApisAuthorizedApi },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedApi)) {
      $dara.Model.validateArray(this.authorizedApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

