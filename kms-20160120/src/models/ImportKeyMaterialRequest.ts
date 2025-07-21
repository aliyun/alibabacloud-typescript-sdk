// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKeyMaterialRequest extends $dara.Model {
  /**
   * @remarks
   * Use **GetParametersForImport** the Returned public key and the base64-encoded key material.
   * 
   * This parameter is required.
   * 
   * @example
   * bCPZx7I6v6KXsqEpr2OXKxuj2CCRtKdwp75Bw+BGncYqBdfjFBYRtOE6HRlT0oeiRDWzwnw9OA54OL36smDJrq4Lo9x0CyYDiuKnRkcKtMtlzW0din7Pd7IlZWWRdVueiw2qpzl7PkUWQGTdsdbzpfJJQ+qj/cRIrk/E83UGyeyytSpgnb+lu0xEYcPajRyWNsbi98N3pqqQzHXNNHO2NJqHlnQgglqTiBEjkGeKFhfKmTc3vjulIdVa3EaVIN6lwWfgx+UUYSrvbA77WDYKlDsZ4SbK2/T7za9Tp1qU7Ynqba7OKGVVj7PMbiaO80AxWZnjUMYCgEp5w7V+seOXqw==
   */
  encryptedKeyMaterial?: string;
  /**
   * @remarks
   * By calling **GetParametersForImport** the import token.
   * 
   * This parameter is required.
   * 
   * @example
   * Base64String
   */
  importToken?: string;
  /**
   * @remarks
   * The ID of the CMK to be imported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The time when the key material expires.
   * 
   * If this parameter is not specified or set this parameter to 0, the key material does not expire.
   * 
   * >  The value cannot be earlier than the time when the API is called (based on the server time).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  keyMaterialExpireUnix?: number;
  static names(): { [key: string]: string } {
    return {
      encryptedKeyMaterial: 'EncryptedKeyMaterial',
      importToken: 'ImportToken',
      keyId: 'KeyId',
      keyMaterialExpireUnix: 'KeyMaterialExpireUnix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedKeyMaterial: 'string',
      importToken: 'string',
      keyId: 'string',
      keyMaterialExpireUnix: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

