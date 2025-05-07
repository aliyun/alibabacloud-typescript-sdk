// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig } from "./UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig";
import { UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig } from "./UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig";


export class UpdateDatasetRequestDatasetConfigSearchSourceConfigs extends $dara.Model {
  /**
   * @example
   * 可以搜索到的关键词，用来验证是否可用
   */
  demoQuery?: string;
  searchSourceRequestConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig;
  searchSourceResponseConfig?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig;
  /**
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      demoQuery: 'DemoQuery',
      searchSourceRequestConfig: 'SearchSourceRequestConfig',
      searchSourceResponseConfig: 'SearchSourceResponseConfig',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoQuery: 'string',
      searchSourceRequestConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig,
      searchSourceResponseConfig: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceResponseConfig,
      size: 'number',
    };
  }

  validate() {
    if(this.searchSourceRequestConfig && typeof (this.searchSourceRequestConfig as any).validate === 'function') {
      (this.searchSourceRequestConfig as any).validate();
    }
    if(this.searchSourceResponseConfig && typeof (this.searchSourceResponseConfig as any).validate === 'function') {
      (this.searchSourceResponseConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

