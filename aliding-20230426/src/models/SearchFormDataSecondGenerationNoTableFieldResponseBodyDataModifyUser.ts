// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchFormDataSecondGenerationNoTableFieldResponseBodyDataModifyUserName } from "./SearchFormDataSecondGenerationNoTableFieldResponseBodyDataModifyUserName";


export class SearchFormDataSecondGenerationNoTableFieldResponseBodyDataModifyUser extends $dara.Model {
  name?: SearchFormDataSecondGenerationNoTableFieldResponseBodyDataModifyUserName;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: SearchFormDataSecondGenerationNoTableFieldResponseBodyDataModifyUserName,
      userId: 'string',
    };
  }

  validate() {
    if(this.name && typeof (this.name as any).validate === 'function') {
      (this.name as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

