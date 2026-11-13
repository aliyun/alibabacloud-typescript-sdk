// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiModelSourceRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the model source or model provider.
   * 
   * @example
   * Model Studio model source
   */
  displayName?: string;
  /**
   * @remarks
   * The expected object version. Use the version returned by the most recent query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The ID of the AI service bound to the model source.
   * 
   * @example
   * svc-d00000000000000000000
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      expectedVersion: 'expectedVersion',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      expectedVersion: 'number',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

