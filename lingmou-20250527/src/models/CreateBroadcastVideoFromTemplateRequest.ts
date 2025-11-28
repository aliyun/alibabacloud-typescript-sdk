// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateVariable } from "./TemplateVariable";


export class CreateBroadcastVideoFromTemplateRequestVideoOptions extends $dara.Model {
  /**
   * @example
   * 30
   */
  fps?: number;
  /**
   * @example
   * 720p
   */
  resolution?: string;
  /**
   * @example
   * True
   */
  watermark?: boolean;
  static names(): { [key: string]: string } {
    return {
      fps: 'fps',
      resolution: 'resolution',
      watermark: 'watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fps: 'number',
      resolution: 'string',
      watermark: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBroadcastVideoFromTemplateRequest extends $dara.Model {
  name?: string;
  /**
   * @example
   * BS1b2WNnRMu4ouRzT4clY9Jhg
   */
  templateId?: string;
  variables?: TemplateVariable[];
  videoOptions?: CreateBroadcastVideoFromTemplateRequestVideoOptions;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      templateId: 'templateId',
      variables: 'variables',
      videoOptions: 'videoOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      templateId: 'string',
      variables: { 'type': 'array', 'itemType': TemplateVariable },
      videoOptions: CreateBroadcastVideoFromTemplateRequestVideoOptions,
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    if(this.videoOptions && typeof (this.videoOptions as any).validate === 'function') {
      (this.videoOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

