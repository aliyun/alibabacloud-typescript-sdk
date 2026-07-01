// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentVoiceprintsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return. Must be 1 or greater.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The registration mode for the voiceprint. The default value is `Explicit`.
   * 
   * @example
   * Explicit
   */
  registrationMode?: string;
  /**
   * @remarks
   * The unique voiceprint ID. If specified, this operation returns the details of a single voiceprint. If omitted, it returns a paginated list of all voiceprints under your account.
   * 
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      registrationMode: 'RegistrationMode',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      registrationMode: 'string',
      voiceprintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

