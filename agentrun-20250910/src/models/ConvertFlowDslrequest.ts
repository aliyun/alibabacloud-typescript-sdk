// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConvertFlowDSLInput } from "./ConvertFlowDslinput";


export class ConvertFlowDSLRequest extends $dara.Model {
  /**
   * @remarks
   * 包含待转换的工作流DSL内容和转换选项，支持多种DSL格式（如Dify、n8n等）以及inline和base64两种输入方式
   * 
   * This parameter is required.
   */
  body?: ConvertFlowDSLInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ConvertFlowDSLInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

