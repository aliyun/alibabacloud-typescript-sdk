// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAIProduceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * AppName
   */
  app?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: [1,100].
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: [1,100].
   * 
   * @example
   * 100
   */
  pageSize?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the subtitle rule.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec****
   */
  rulesId?: string;
  /**
   * @remarks
   * The suffix of the subtitle rule.
   * 
   * > Set the value to the name of the subtitle template.
   * 
   * @example
   * sub01
   */
  suffixName?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'string',
      pageSize: 'string',
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

