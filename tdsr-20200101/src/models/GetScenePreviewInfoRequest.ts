// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenePreviewInfoRequest extends $dara.Model {
  /**
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A.e.RQJRPYGIJJQP****
   */
  modelToken?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      modelToken: 'ModelToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      modelToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

