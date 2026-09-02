// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUuidVulNumClassifyStatisticRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  imageVul?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 391abd09184cbd3743d7f5ec125d****,
   * e6aeb2a5b6004479398b0bcd1160****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      imageVul: 'ImageVul',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageVul: 'boolean',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

