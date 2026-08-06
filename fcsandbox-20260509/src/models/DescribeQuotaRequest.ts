// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * Team ID
   * 
   * @example
   * f79d6a95-abcd-47a8-9167-eccf0622a998
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

