// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceRequest extends $dara.Model {
  hibernate?: boolean;
  /**
   * @remarks
   * Specifies whether to isolate the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isolate?: boolean;
  static names(): { [key: string]: string } {
    return {
      hibernate: 'Hibernate',
      isolate: 'Isolate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hibernate: 'boolean',
      isolate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

