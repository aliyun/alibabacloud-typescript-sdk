// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretVersionStageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * 8cad259f-4d77-40ec-bbd7-b9c47a423bb9
   */
  requestId?: string;
  /**
   * @remarks
   * The version to which you want to apply the specified stage label.
   * 
   * > * You must specify at least one of the RemoveFromVersion and MoveToVersion parameters.
   * > * If the VersionStage parameter is set to ACSCurrent or ACSPrevious, this parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

