// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LifecyclePostStartExec extends $dara.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePostStart extends $dara.Model {
  exec?: LifecyclePostStartExec;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: LifecyclePostStartExec,
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePreStopExec extends $dara.Model {
  command?: string[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecyclePreStop extends $dara.Model {
  exec?: LifecyclePreStopExec;
  static names(): { [key: string]: string } {
    return {
      exec: 'Exec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exec: LifecyclePreStopExec,
    };
  }

  validate() {
    if(this.exec && typeof (this.exec as any).validate === 'function') {
      (this.exec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Lifecycle extends $dara.Model {
  postStart?: LifecyclePostStart;
  preStop?: LifecyclePreStop;
  static names(): { [key: string]: string } {
    return {
      postStart: 'PostStart',
      preStop: 'PreStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postStart: LifecyclePostStart,
      preStop: LifecyclePreStop,
    };
  }

  validate() {
    if(this.postStart && typeof (this.postStart as any).validate === 'function') {
      (this.postStart as any).validate();
    }
    if(this.preStop && typeof (this.preStop as any).validate === 'function') {
      (this.preStop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

