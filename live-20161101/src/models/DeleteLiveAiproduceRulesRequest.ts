// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveAIProduceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  app?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the subtitle rule.
   * 
   * @example
   * 445409ec-7eaa-461d -8f29-4bec2eb9****
   */
  rulesId?: string;
  /**
   * @remarks
   * The suffix of the subtitle rule.
   * 
   * >  Set the value to the name of the subtitle template.
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

