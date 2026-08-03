// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CountTextRequest extends $dara.Model {
  generationSource?: string;
  industry?: string;
  publishStatus?: string;
  style?: string;
  static names(): { [key: string]: string } {
    return {
      generationSource: 'generationSource',
      industry: 'industry',
      publishStatus: 'publishStatus',
      style: 'style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationSource: 'string',
      industry: 'string',
      publishStatus: 'string',
      style: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

