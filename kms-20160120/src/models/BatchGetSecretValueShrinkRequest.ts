// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetSecretValueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of secret information. You can query up to 20 different secrets at a time.
   */
  secretsListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      secretsListShrink: 'SecretsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretsListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

