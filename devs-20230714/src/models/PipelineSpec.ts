// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Context } from "./Context";
import { PipelineTemplateSpec } from "./PipelineTemplateSpec";


export class PipelineSpec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * my-pipeline-template
   */
  templateName?: string;
  templateSpec?: PipelineTemplateSpec;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      templateName: 'templateName',
      templateSpec: 'templateSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      templateName: 'string',
      templateSpec: PipelineTemplateSpec,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.templateSpec && typeof (this.templateSpec as any).validate === 'function') {
      (this.templateSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

