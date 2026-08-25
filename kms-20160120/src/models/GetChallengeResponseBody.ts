// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChallengeResponseBody extends $dara.Model {
  /**
   * @example
   * eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJub25jZSI6Im1OWnpNVENTc3JVT1JTd1d1WFNneDlTNG80MW1Mc3FPS21xd0d4Tzk******E3NTU5NzIzMDB9.signature-part...=
   */
  challengeToken?: string;
  /**
   * @example
   * mNZzMTCQ******4o1mLsqOKmqwGxO94i9c=
   */
  nonce?: string;
  /**
   * @example
   * c337a6ee-27d1-465e-acb2-dddef7c3c589
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      challengeToken: 'ChallengeToken',
      nonce: 'Nonce',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      challengeToken: 'string',
      nonce: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

