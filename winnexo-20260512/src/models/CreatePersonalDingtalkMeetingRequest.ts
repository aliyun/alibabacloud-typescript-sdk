// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalDingtalkMeetingRequest extends $dara.Model {
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * exampleCredentialId
   */
  credentialId?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * Watchlist Monitor Layer
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * p-default-007735a2-58f5-47a5-9e37-ea3fd64e0899
   */
  name?: string;
  /**
   * @remarks
   * The meeting notes content (optional). The notes are used for auxiliary analysis.
   * 
   * @example
   * string_value
   */
  notes?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object name, optional).
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The meeting code.
   * 
   * This parameter is required.
   * 
   * @example
   * 356 776 973
   */
  roomCode?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
      description: 'description',
      directoryId: 'directoryId',
      name: 'name',
      notes: 'notes',
      operatingObjectName: 'operatingObjectName',
      roomCode: 'roomCode',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      description: 'string',
      directoryId: 'string',
      name: 'string',
      notes: 'string',
      operatingObjectName: 'string',
      roomCode: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

