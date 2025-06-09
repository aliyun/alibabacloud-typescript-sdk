// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCollectionPolicyResponseBodyCollectionPolicy } from "./GetCollectionPolicyResponseBodyCollectionPolicy";


export class GetCollectionPolicyResponseBody extends $dara.Model {
  collectionPolicy?: GetCollectionPolicyResponseBodyCollectionPolicy;
  static names(): { [key: string]: string } {
    return {
      collectionPolicy: 'collectionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionPolicy: GetCollectionPolicyResponseBodyCollectionPolicy,
    };
  }

  validate() {
    if(this.collectionPolicy && typeof (this.collectionPolicy as any).validate === 'function') {
      (this.collectionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

