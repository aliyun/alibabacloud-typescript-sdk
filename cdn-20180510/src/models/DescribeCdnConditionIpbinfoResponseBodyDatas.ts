// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnConditionIPBInfoResponseBodyDatas extends $dara.Model {
  /**
   * @remarks
   * The configuration value.
   * 
   * @example
   * "[{\\"text\\":\\"阿鲁巴\\",\\"value\\":\\"AW\\"}]"
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

