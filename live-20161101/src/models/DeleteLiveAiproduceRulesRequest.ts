// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveAIProduceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the live stream application.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  app?: string;
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The subtitle rule ID.
   * 
   * @example
   * 445409ec-7eaa-461d -8f29-4bec2eb9****
   */
  rulesId?: string;
  /**
   * @remarks
   * The subtitle suffix. This parameter is required. Otherwise, the InvalidParameter error is returned.
   * > Set this parameter to the value of SubtitleName that is specified in the subtitle template.
   * 
   * @example
   * et
   */
  suffixName?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rulesId: 'RulesId',
      suffixName: 'SuffixName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
      ownerId: 'number',
      regionId: 'string',
      rulesId: 'string',
      suffixName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

