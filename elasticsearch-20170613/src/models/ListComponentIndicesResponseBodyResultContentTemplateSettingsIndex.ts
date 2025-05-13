// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle } from "./ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle";


export class ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex extends $dara.Model {
  /**
   * @example
   * best_compression
   */
  codec?: string;
  lifecycle?: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle;
  static names(): { [key: string]: string } {
    return {
      codec: 'codec',
      lifecycle: 'lifecycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codec: 'string',
      lifecycle: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle,
    };
  }

  validate() {
    if(this.lifecycle && typeof (this.lifecycle as any).validate === 'function') {
      (this.lifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

