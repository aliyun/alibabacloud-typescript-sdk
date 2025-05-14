// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchFormDataSecondGenerationNoTableFieldResponseBodyDataOriginatorName } from "./SearchFormDataSecondGenerationNoTableFieldResponseBodyDataOriginatorName";


export class SearchFormDataSecondGenerationNoTableFieldResponseBodyDataOriginator extends $dara.Model {
  name?: SearchFormDataSecondGenerationNoTableFieldResponseBodyDataOriginatorName;
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
      name: SearchFormDataSecondGenerationNoTableFieldResponseBodyDataOriginatorName,
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

