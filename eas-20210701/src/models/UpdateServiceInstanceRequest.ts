// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceRequest extends $dara.Model {
  isReplica?: boolean;
  detach?: boolean;
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
      isReplica: 'IsReplica',
      detach: 'Detach',
      hibernate: 'Hibernate',
      isolate: 'Isolate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isReplica: 'boolean',
      detach: 'boolean',
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

