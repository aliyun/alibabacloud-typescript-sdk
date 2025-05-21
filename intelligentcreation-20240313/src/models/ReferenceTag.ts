// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReferenceTag extends $dara.Model {
  referenceContent?: string;
  referenceTitle?: string;
  static names(): { [key: string]: string } {
    return {
      referenceContent: 'referenceContent',
      referenceTitle: 'referenceTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referenceContent: 'string',
      referenceTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

