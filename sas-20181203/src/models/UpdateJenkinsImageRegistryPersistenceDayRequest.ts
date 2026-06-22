// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJenkinsImageRegistryPersistenceDayRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period. Unit: days.
   * 
   * @example
   * 30
   */
  persistenceDay?: number;
  /**
   * @remarks
   * The image repository ID.
   * >You can call the [PageImageRegistry](~~PageImageRegistry~~) operation to obtain this parameter.
   * 
   * @example
   * 25363
   */
  registryId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 106.11.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      persistenceDay: 'PersistenceDay',
      registryId: 'RegistryId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      persistenceDay: 'number',
      registryId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

