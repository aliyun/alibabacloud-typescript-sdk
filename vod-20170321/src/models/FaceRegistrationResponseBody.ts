// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceRegistrationResponseBodyNonExistImageIds extends $dara.Model {
  string?: string[];
  static names(): { [key: string]: string } {
    return {
      string: 'String',
    };
  }

  static types(): { [key: string]: any } {
    return {
      string: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.string)) {
      $dara.Model.validateArray(this.string);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRegistrationResponseBodyRegisteredPersonFacesFace extends $dara.Model {
  imageId?: string;
  quality?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      quality: 'Quality',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      quality: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRegistrationResponseBodyRegisteredPersonFaces extends $dara.Model {
  face?: FaceRegistrationResponseBodyRegisteredPersonFacesFace[];
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: { 'type': 'array', 'itemType': FaceRegistrationResponseBodyRegisteredPersonFacesFace },
    };
  }

  validate() {
    if(Array.isArray(this.face)) {
      $dara.Model.validateArray(this.face);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRegistrationResponseBodyRegisteredPerson extends $dara.Model {
  faces?: FaceRegistrationResponseBodyRegisteredPersonFaces;
  personId?: string;
  personName?: string;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      personId: 'PersonId',
      personName: 'PersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: FaceRegistrationResponseBodyRegisteredPersonFaces,
      personId: 'string',
      personName: 'string',
    };
  }

  validate() {
    if(this.faces && typeof (this.faces as any).validate === 'function') {
      (this.faces as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceRegistrationResponseBody extends $dara.Model {
  nonExistImageIds?: FaceRegistrationResponseBodyNonExistImageIds;
  registeredPerson?: FaceRegistrationResponseBodyRegisteredPerson;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistImageIds: 'NonExistImageIds',
      registeredPerson: 'RegisteredPerson',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistImageIds: FaceRegistrationResponseBodyNonExistImageIds,
      registeredPerson: FaceRegistrationResponseBodyRegisteredPerson,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nonExistImageIds && typeof (this.nonExistImageIds as any).validate === 'function') {
      (this.nonExistImageIds as any).validate();
    }
    if(this.registeredPerson && typeof (this.registeredPerson as any).validate === 'function') {
      (this.registeredPerson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

